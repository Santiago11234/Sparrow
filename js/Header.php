<!-- Meta -->


<header>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-migrate-3.0.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"></script>
    <script type='module'>
        console.log(localStorage.getItem("money"));
        var data = localStorage.getItem("person");
        document.getElementById('username').innerHTML = data;
        var money = localStorage.getItem("money");
        document.getElementById('money').innerHTML = money;
    </script>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong sticky-top"
            style="font-family: 'Roboto', sans-serif;">
            <a class="navbar-brand me-4 ml-4" href="HomePage.html">
                <i class="fa-solid fa-home"></i>
            </a>
            <div class="collapse navbar-collapse" style="padding-top: 0em;" id="navbarSupportedContent">
                <a style="text-decoration: none;float:right;margin-left:20px;" class="pt-0" href="AboutUs.html">
                    <button type="button" class="how-to-play btn btn-outline-primary, rounded-pill">
                        <span style="color: black"> About Us </span>
                    </button>
                </a>
                <a style="text-decoration: none;float:right;margin-left:20px;" class="pt-0" href="Customize.html">
                    <button type="button" class="how-to-play btn btn-outline-primary, rounded-pill">
                        <i class="fa-solid fa-crow" style="color:#74726B"></i>
                        <span style="color: black"> Customize </span>
                    </button>
                    <a style="text-decoration: none;float:right;margin-left:20px;" class="pt-0" href="HowToPlay.html">
                        <button type="button" class="how-to-play btn btn-outline-primary, rounded-pill">How To
                            Play</button>
                    </a>
                </a>
            </div>
            <a class="navbar-brand me-4" style="color: white">
                <span id="username"
                    style="text-decoration: none;float:left;margin-left:20px; color: white;">username</span>
                <i class="fa-solid fa-seedling"
                    style="text-decoration: none;float:left;margin-left:20px; color: white;"></i>
                <span id="money" style="color: white"> 200 </span>
            </a>
            <a class="navbar-brand me-4" href="settings.html">
                <i class="fa-solid fa-gear"></i>
            </a>
            <div class="dropdown " style="margin-right:1%">
                <a class="dropdown-toggle hidden-arrow" type="button" id="dropdownMenuicon" data-mdb-toggle="dropdown"
                    aria-expanded="true">
                    <i class="fa-solid fa-sign-out" style="color:white; height:100%; width:100%;"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuicon" style="position: relative; left: -125px;">
                    <li><a class="dropdown-item" href="index.html"> <i class="fas fa-sign-out"></i> Are You Sure?</a>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
</header>