<template>
	<div>
		<div class=" text-center shadow">
			<h2 class="text-success">Companies</h2>
		</div>
		<div class="row">
			<div v-for='company in companies'  class="col-lg-4 p-4">
				<div class="shadow p-3">
					<h3>{{company.name}}</h3>
			    	<ul v-for='product in company.products'>
			    		<li>{{product.name}}</li>
			    	</ul>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{

			data(){
				return{
					companies:[],
				}
			},
			mounted(){
				axios.get('api/companies')
				.then(res=>{
					console.log(res.data)
					this.companies = res.data 
				})
			}

	}
</script>