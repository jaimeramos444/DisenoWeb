// Inicio de la configuración de diapositivas.

	// Declaración de variables.
    var Fotos; // Lugar donde se almacenara la ruta de la imagen.
    var V_max; // Longitud máxima del vector "Fotos".
    var aux;   // Auxiliar para configuración.
    var aux_2; // Auxiliar para programación.

// Inicio de variables.
    Fotos = new Array(); // Crea el vector para las fotos.
    aux_2 = 0; // Inicia la variable auxiliar de programación con valor 0.

// Rutas de imagenes.
    Fotos [0] = "imagenes/mardecadiz.jpg"
    Fotos [1] = "imagenes/mardecadiz2.jpg"
    Fotos [2] = "imagenes/mardecadiz3.jpg"


// Para mas imagenes solo añadir mas valores "Fotos [] = "url de la imagen"

    V_max = Fotos.length-1; // Obtiene la longitud del vector.

// Fin de la configuración de diapositivas.

// Pasar a la siguiente imagen.
    function siguiente() {
        
        if (aux_2 == V_max){
        
            aux_2 = 0;
        
        }

        else{

            aux_2 = aux_2+1;

        }

        document.images.img1.src = Fotos[aux_2];

        document.href.boton = Fotos[aux_2];
    }

// Pasar a la siguiente imagen.
    function anterior() {
        
        if (aux_2 == 0){
        
            aux_2 = V_max;
        
        }

        else{

            aux_2 = aux_2-1;

        }

        document.images.img1.src = Fotos[aux_2];
    }

    function login() {
        open('pagina.html','','top=300,left=300,width=300,height=300') ;
        }

// Fin de la programación de diapositivas.