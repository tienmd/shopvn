/// <reference path="/Assets/admin/libs/angular/angular.js" />

(function (app) {
    app.controller('productListController', productListController);

    productListController.$inject = ['$scope', 'apiService', 'notificationService', '$ngBootbox', '$filter'];

    function productListController($scope, apiService, notificationService, $ngBootbox, $filter) {
        $scope.products = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.getProducts = getProducts;
        $scope.keyword = '';
        $scope.sreach = sreach;

        $scope.delProduct = delProduct;

        $scope.deleteMultiple = deleteMultiple;

        function deleteMultiple() {
            var listId = [];
            $.each($scope.selected, function (i, item) {
                listId.push(item.ID);
            });

            var config = {
                params: {
                    checkedProducts: JSON.stringify(listId)
                }
            }
            apiService.del('api/product/deletemulti', config, function (result) {
                notificationService.displaySuccess('Xoa thanh cong ' + result.data + ' ban ghi');
                sreach();
            }, function (error) {
                notificationService.displayError('Xoa khong thanh cong');
            })
        }


        $scope.$watch("products", function (n, o) {
            var checked = $filter("filter")(n, { checked: true });
            if (checked.length) {
                $scope.selected = checked;
                $('#btnDelete').removeAttr('disabled');
            } else {
                $('#btnDelete').attr('disabled', 'disabled');
            }
        }, true);
        $scope.selectAll = selectAll;
        $scope.isAll = false;
        function selectAll() {
            if ($scope.isAll === false) {
                angular.forEach($scope.products, function (products) {
                    products.checked = true;
                });
                $scope.isAll = true;
            } else {
                angular.forEach($scope.products, function (products) {
                    products.checked = false;
                });
                $scope.isAll = false;
            }
        };

        function delProduct(id) {
            $ngBootbox.confirm('Bạn có chắc chắn muốn xóa?').then(function () {
                var config = {
                    params: {
                        id: id
                    }
                }

                apiService.del('api/product/delete', config, function () {
                    notificationService.displaySuccess('Xóa thành công');
                    sreach();
                }, function () {
                    notificationService.displayError('Xóa không thành công');
                });

            });
        }

        function sreach() {
            getProducts();
        }

        function getProducts(page) {
            page = page || 0;
            var config = {
                params: {
                    keyword: $scope.keyword,
                    page: page,
                    pageSize: 20
                }
            }
            apiService.get('api/product/getall', config, function (result) {
                if (result.data.TotalCount == 0) {
                    notificationService.displayWarning('không có bản ghi nào được tìm thấy');
                }
                $scope.products = result.data.Items;
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.TotalPages;
                $scope.totalCount = result.data.TotalCount;
            }, function () {
                console.log('Load product failed');
            });
        }

        $scope.getProducts();
    }
})(angular.module('projectshop.products'));