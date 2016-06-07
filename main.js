
//Когда шаблон в директиве становится большим - его трудно поддерживать. 
//Мы можем заменить переменную шаблона на templateUrl, которая позволяет указывать какой шаблон загружать.

// Создадим директиву<foo-bar>FooBar</foo-bar>
// и опишем её
// var app = angular.module('app', []);
// 
// 
// app.directive('fooBar', function(){
//     
//     
    // return {
        // restrict : 'E',
// 
        // link : function (scope, element, attrs){
        // console.log('directive');
       // }  
    // };
//     
// });

//посмотрим в консоль браузера
//видим строку this is my directive.. все хорошо
//теперь давайте добавим шаблон
 //template : "<div></div>",
 // т.е. есл у нас кода немного ... те.одна строчка)...то шаблон нам подходит потому что его легко поддерживать
 // Как только у нас шаблон разрастается и директива может быть на 50 строк и более html кода, тогда это становится неудобно
 
 // И в этом случае используется такая вещь как TemplateUrl!!!!
 
 //т.е. указывается ссылка на этот шаблон
 //например bookmarks.html
 //templateUrl: "bookmarks.html",
 //Запустим браузер и мы увидим ошибку т.к. страница bookmarks.html не найдена
 // т.е. если бы у нас была страница bookmarks.html то она теоретически должна была бы работать
 
 // Как же сделать так чтобы оно заработало?
 
 // мы не будем создавать отдельный файл
 // а вместо этого в нашем html ниже <foo-bar>FooBar</foo-bar> напишем script type ng-template
 // <script type="text/ng-template" id='bookmarks.html'>
    // <div ng-repeat='bookmark in bookmarks'>
      // {{bookmark.name}}
    // </div>
// 
    // <div ng-repeat='bookmark in bookmarks'>
      // {{bookmark.name}}
    // </div>
// 
    // <div ng-repeat='bookmark in bookmarks'>
      // {{bookmark.name}}
    // </div>
  // </script>

// и это будет тоже самое как если бы страница bookmarks.html была бы загружена через http://

//сделаем так как мы делали раньше

// Поддерживать такой код лучше поскольку мы пишем шаблон в html файле и хорошо видим разметку
//Поэтому всегда когда шаблон разрастается используют templateUrl указывая путь
//если же вы хотите попробовать чтобы templateUrl работал не через скрипт
// то тогда надо
// - поднять через вебсервер (например web-storm и тд) 
// Я подключил openserver  и добавил bookmarks.html c кодом
// <div ng-repeat='bookmark in bookmarks'>
      // {{bookmark.name}}
    // </div>
// 
    // <div ng-repeat='bookmark in bookmarks'>
      // {{bookmark.name}}
    // </div>
// 
    // <div ng-repeat='bookmark in bookmarks'>
      // {{bookmark.name}}
    // </div>
    
    //все заработало точно также как со скриптом




var app = angular.module('app', []);


app.directive('fooBar', function(){
    
    
   var bookmarks = [
    {
      id: 1,
      name: 'EmberJS'
    },
    {
      id: 2,
      name: 'AngularJS'
    }
  ];
  return {
    restrict: 'E',
    templateUrl: "bookmarks.html",
    link: function (scope, element, attrs) {
      console.log('directive');
      scope.bookmarks = bookmarks;
    }
  };
});












