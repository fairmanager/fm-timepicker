angular.module('fmTimepicker').run(['$templateCache', function($templateCache) {
  $templateCache.put("fmTimepicker.html",
    "<div><div class=\"input-group\"><span class=\"input-group-btn\" ng-if=\"style === 'sequential'\"><button type=\"button\" class=\"btn {{btnClass}}\" ng-click=\"decrement()\" ng-disabled=\"activeIndex === 0 || disabled\"><span class=\"glyphicon glyphicon-minus\"></span></button></span> <input type=\"text\" class=\"form-control\" ng-model=\"time\" ng-keyup=\"handleKeyboardInput( $event )\" ng-change=\"update()\" ng-disabled=\"disabled\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn {{btnClass}}\" ng-if=\"style === 'sequential'\" ng-click=\"increment()\" ng-disabled=\"activeIndex === largestPossibleIndex || disabled\"><span class=\"glyphicon glyphicon-plus\"></span></button> <button type=\"button\" class=\"btn {{btnClass}}\" ng-if=\"style === 'dropdown'\" ng-class=\"{active : isOpen}\" fm-timepicker-toggle ng-disabled=\"disabled\"><span class=\"glyphicon glyphicon-time\"></span></button></span></div><div class=\"dropdown\" ng-if=\"style === 'dropdown' && isOpen\" ng-class=\"{open : isOpen}\"><ul class=\"dropdown-menu form-control\" style=\"height:auto; max-height:160px; overflow-y:scroll\" ng-mousedown=\"handleListClick( $event )\"><!-- Fill an empty array with time values between start and end time with the given interval, then iterate over that array. --><li ng-repeat=\"time in ( $parent.dropDownOptions = ( [] | fmTimeInterval:startTime:endTime:interval ) )\" ng-click=\"select( time, $index )\" ng-class=\"{active : activeIndex === $index}\"><!-- For each item, check if it is the last item. If it is, communicate the index to a method in the scope. -->{{$last ? largestPossibleIndexIs( $index ) : angular.noop()}}<!-- Render a link into the list item, with the formatted time value. --><a href=\"#\" ng-click=\"preventDefault( $event )\">{{time | fmTimeFormat:format}}</a></li></ul></div></div>");
}]);