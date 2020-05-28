<template>
<div>
<header class="masthead" style="background-image:url('assets/img/about-bg.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="site-heading">
                    <h1 v-text="title"></h1>
                </div>
            </div>
        </div>
    </div>
</header>
</div>
</template>

<script>
export default {
    props: ['admin'],

    computed: {
        title(){
            if (this.admin =='simple')
                return `Bienvenido a la página de Administración`

            else if (this.admin =='avanzado')
                return `Esta página de administración está en construcción. Intente como administrador simple`
                
            else
                return 'Esta pagina no existe'
        }
    }
}
</script>