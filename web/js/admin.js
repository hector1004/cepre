$(document).ready(function () {
                
                //captura de la tecla esc para cerrar varios divs
                $(document).bind('keydown',function(e){
                    if ( e.which == 27 ) {
                               ocultarMenu();
                               cerrarDivsCRUDE();
                               limpiarFormClientes();
                                
                        };
                });
                
                //Funciones para cerrar forms
                $("#btnLogout").click(function() {
                   $("#salirDiv").fadeIn();
                });
                
                $("#noSalir").click(function(){
                  
                    $("#salirDiv").fadeOut();
                    
                });
                
                $(".cerrarDivsEntidades").click(function(){
                    $(".divEntidades").fadeOut();
                })
                
                $(".btnNegativo").click(function(){
                      cerrarDivsCRUDE();
                });
    
                    
                $(".cerrarForm").click(function (){
                    
                     cerrarDivsCRUDE();
                     limpiarFormClientes();
                    
                });
                        
           

                function cerrarDivsCRUDE(){
                    $(".FondFrms").fadeOut();                    
                }
                //Funciones para el panel del menu
                
                $("#btnConfiguraciones").click(function(){
                
                    
                    $("#PanelMenu").fadeIn();
                    
                });
                
                $("#ocultarMenu").click(ocultarMenu);
                
                function ocultarMenu(){
                $("#PanelMenu").fadeOut();
                    
                }
                
              function animate(element_ID, animation) {
                $(element_ID).addClass(animation);
                var wait = window.setTimeout( function(){
                $(element_ID).removeClass(animation)}, 1000
            );
        }
    
});