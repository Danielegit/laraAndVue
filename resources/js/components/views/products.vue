<template>
	<div>
		<div class=" text-center shadow">
			<h2 class="text-success">Products</h2>
		</div>
		<div class="row">
			<div v-for='prod in products'  class="col-lg-4 p-4">
				<div class="shadow p-3">
					<h3>{{prod.name}}</h3>
			    	<p>Price: {{prod.price}}€ </p>
			    	<p>Produced by: {{prod.company.name}} </p>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{

			data(){
				return{
					products:[],
				}
			},
			mounted(){
				axios.get('api/prod')
				.then(res=>{
					console.log(res.data)
					this.products = res.data 
				})
			}

	}
</script>