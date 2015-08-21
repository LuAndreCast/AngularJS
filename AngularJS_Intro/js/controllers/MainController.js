app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  $scope.mains = [
    {
      name: 'Penne Pasta',
      description: 'pasta',
      price: 14.95
    },
    {
      name: 'Lasagna',
      description: 'Served with marinara sauce.',
      price: 13.95
    },
    {
      name: 'Ravioli',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 14.95
    }
    ];
    $scope.sides = [
    {
      name: 'Breadsticks',
      description: 'breadsticks with garlic',
      price: 6.95
    },
    {
      name: 'Salad',
      description: 'Served with ceaser dressing.',
      price: 5.95
    },
    {
      name: 'Other sticks',
      description: 'other sticks go here',
      price: 7.95
    }
    ];
}]);