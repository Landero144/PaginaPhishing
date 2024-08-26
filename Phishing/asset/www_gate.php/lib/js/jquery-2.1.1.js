<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="iso-8859-1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="UNAM, Direccion General de Administracion Escolar, Servicios Escolares" />
    <meta name="keywords" content="unam,academica,academico,escolar,servicios,tramites,historial academico" />
    <meta name="author" content="DGAE/SSRE/SIAE" />
    <meta name="copyright" content="&copy; 1998-2024 UNAM - DGAE/SSRE/SIAE" />
    <meta name="robot" content="index,follow" />
    <meta http-equiv="Content-Type" content="text/html" />
    <meta http-equiv="Page-Exit" content="blendTrans(Duration=0.5)" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#1C3D6C" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <!-- Sección: Title del Sitio -->
    <title>UNAM / DGAE / SIAE ~ Sistema Integral de Administración Escolar</title>
    <!-- /Sección: Title del Sitio -->
    <!-- Sección: Links -->
    <link href="/assets/images/favicon.ico" rel="icon" type="image/x-icon" />
    <link href="/assets/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link href="/assets/images/favicon.ico" rel="bookmark" type="image/x-icon" />
    <link href="/assets/images/custom_icon.png" rel="apple-touch-icon" />
    <link href="/assets/images/custom_icon.png" sizes="150x150" rel="icon" />
    <script type="text/javascript">if (self!= top) top.location.href = self.location.href;</script>
	<script type="text/javascript" src="lib/js/jquery-2.1.1.js"></script>
	<link rel="stylesheet" type="text/css" href="/css/siae.general.css" />
	<link rel="stylesheet" type="text/css" href="/css/siae.gate.css" />
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.css" />
    <!-- /Sección: Links -->
    </head>

<body id="inicio">

<div class="wrapper">

  <div class="container">

    <div class="divForma">


      <div class="home">

        <a href="index.html"><i class="fa fa-home invert" aria-hidden="true"></i></a>

      </div>

      <div class="help-tip">
          <p align="justify">Para acceder como <b>Académico</b>, en el nombre de <b>Usuario</b> digite su <b>RFC</b> con homoclave y en <b>NIP</b> el que le fue proporcionado en su carta o tríptico.<br/><br/>

          Para acceder como <b>Alumno</b>, en el nombre de <b>Usuario</b> digite su <b>N&uacute;mero de Cuenta</b> agregue un <b>cero</b> en la parte m&aacute;s significativa si su generación es menor al 2000, adem&aacute;s omita el gui&oacute;n que separa al dígito
          verificador. Por ejemplo para el n&uacute;mero de cuenta <b>9025888-5</b> se tendr&iacute;a que
          escribir en n&uacute;mero <b>090258885</b> en la casilla respectiva.<br/><br/>

          Si es alumno y aún no ha realizado cambio de <b>NIP</b>, éste corresponde a su fecha de nacimiento y tiene el siguiente formato: <b><i>ddmmaaaa</i></b>; en donde la fecha de nacimiento es el 22 de septiembre de 1974, el nip ser&iacute;a: <b>22091974</b>.</p>
      </div>

      <h1>Bienvenido al SIAE</h1>

        <form class="form" action="www_gate.php" method="post" id="frm">
          <input type="hidden" name="acc" value="aut">
          <input type="text" name="usr_logi" maxlength="13" placeholder="Usuario" value="">
          <input type="password" name="usr_pass" maxlength="10" placeholder="NIP">
   
          <img class="captcha" src="lib/captcha.php" title="Digita el resultado de la operación." />
          <input type="text" id="captcha" name="captcha" maxlength="10" placeholder="Captcha"><br/>

          <button type="submit" id="login-button">Acceder</button>

        </form>
            
        	
    </div>

  </div>
  
  <ul class="bg-bubbles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>

	<script type="text/javascript">

	$(document).ready(function() {

	  $("#login-button").click(function(event){

	     //event.preventDefault();
	     
	     $('form').fadeOut(500);
       $('.container h1').fadeOut(500);
	     $('.wrapper').addClass('form-success');

	  });

    $("input:password").focus(function(event){
       $('.mensaje').html('');
    });

	});

	</script>

</body>

</html>
