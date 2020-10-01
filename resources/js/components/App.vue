<template>
    <div>
        <Navbar />
<!--        <div class="container mt-5">-->
<!--            <div class="card-group">-->
<!--                <div class="card">-->
<!--                    <img src="https://image.freepik.com/free-vector/cool-monkey-logo-design-vector-illustrator_56473-421.jpg" class="card-img-top" alt="...">-->
<!--                    <div class="card-body">-->
<!--                        <h5 class="card-title">Card title</h5>-->
<!--                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>-->
<!--                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="card">-->
<!--                    <img src="https://image.freepik.com/free-vector/cool-monkey-logo-design-vector-illustrator_56473-421.jpg" class="card-img-top" alt="...">-->
<!--                    <div class="card-body">-->
<!--                        <h5 class="card-title">Card title</h5>-->
<!--                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>-->
<!--                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="card">-->
<!--                    <img src="https://image.freepik.com/free-vector/cool-monkey-logo-design-vector-illustrator_56473-421.jpg" class="card-img-top" alt="...">-->
<!--                    <div class="card-body">-->
<!--                        <h5 class="card-title">Card title</h5>-->
<!--                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>-->
<!--                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        name: "App",
        components: {
            Navbar
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
