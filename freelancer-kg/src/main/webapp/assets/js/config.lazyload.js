// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '../../assets/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   '../../assets/bower_components/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '../../assets/bower_components/flot/jquery.flot.js',
                          '../../assets/bower_components/flot/jquery.flot.pie.js', 
                          '../../assets/bower_components/flot/jquery.flot.resize.js',
                          '../../assets/bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
                          '../../assets/bower_components/flot.orderbars/js/jquery.flot.orderBars.js',
                          '../../assets/bower_components/flot-spline/js/jquery.flot.spline.js'],
      moment:         [   '../../assets/bower_components/moment/moment.js'],
      screenfull:     [   '../../assets/bower_components/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '../../assets/bower_components/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '../../assets/bower_components/html5sortable/jquery.sortable.js'],
      nestable:       [   '../../assets/bower_components/nestable/jquery.nestable.js',
                          '../../assets/bower_components/nestable/jquery.nestable.css'],
      filestyle:      [   '../../assets/bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '../../assets/bower_components/bootstrap-slider/bootstrap-slider.js',
                          '../../assets/bower_components/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '../../assets/bower_components/chosen/chosen.jquery.min.js',
                          '../../assets/bower_components/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '../../assets/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '../../assets/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   '../../assets/bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../../assets/bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '../../assets/bower_components/datatables/media/js/jquery.dataTables.min.js',
                          '../../assets/bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '../../assets/bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '../../assets/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '../../assets/bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '../../assets/bower_components/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '../../assets/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   '../../assets/bower_components/footable/dist/footable.all.min.js',
                          '../../assets/bower_components/footable/css/footable.core.css'],
      fullcalendar:   [   '../../assets/bower_components/moment/moment.js',
                          '../../assets/bower_components/fullcalendar/dist/fullcalendar.min.js',
                          '../../assets/bower_components/fullcalendar/dist/fullcalendar.css',
                          '../../assets/bower_components/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '../../assets/bower_components/moment/moment.js',
                          '../../assets/bower_components/bootstrap-daterangepicker/daterangepicker.js',
                          '../../assets/bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '../../assets/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '../../assets/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      '../../assets/bower_components/ng-grid/build/ng-grid.min.js',
                      '../../assets/bower_components/ng-grid/ng-grid.min.css',
                      '../../assets/bower_components/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      '../../assets/bower_components/angular-ui-grid/ui-grid.min.js',
                      '../../assets/bower_components/angular-ui-grid/ui-grid.min.css',
                      '../../assets/bower_components/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      '../../assets/bower_components/angular-ui-select/dist/select.min.js',
                      '../../assets/bower_components/angular-ui-select/dist/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    '../../assets/bower_components/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['../../assets/bower_components/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      '../../assets/bower_components/ngImgCrop/compile/minified/ng-img-crop.js',
                      '../../assets/bower_components/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      '../../assets/bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      '../../assets/bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      '../../assets/bower_components/angularjs-toaster/toaster.js',
                      '../../assets/bower_components/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      '../../assets/bower_components/textAngular/dist/textAngular-sanitize.min.js',
                      '../../assets/bower_components/textAngular/dist/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      '../../assets/bower_components/venturocket-angular-slider/build/angular-slider.min.js',
                      '../../assets/bower_components/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      '../../assets/bower_components/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      '../../assets/bower_components/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      '../../assets/bower_components/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      '../../assets/bower_components/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      '../../assets/bower_components/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      '../../assets/bower_components/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      '../../assets/bower_components/angular-xeditable/dist/js/xeditable.min.js',
                      '../../assets/bower_components/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      '../../assets/bower_components/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;
