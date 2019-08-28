<script>
    import Hello from "./Hello"

    export default {
        name: "app",
        data() {
            return {
                msg: "vue中也可以使用jsx来创建view"
            }
        },
        render() {
            return <div>
                <h1>{this.msg}</h1>
                <Hello/>
            </div>
        }
    }
</script>

<style scoped>

</style>
