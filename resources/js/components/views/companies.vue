<template>
	<div>

		<div class=" text-center shadow">
			<h2 class="py-2">Companies</h2>
			<button @click="showForm()" class="btn btn-dark m-2 ">Add New Company</button>
		</div>

		<div v-if="displayForm" class="shadow p-5">
			<h5 class="text-center">New Company:</h5>
			<form @submit.prevent="addCompany">
				<div class="form-group">
                	<label>Company's Name</label>
                	<input v-model="company.name" type="text" class="form-control" placeholder="Enter Company's name">
                </div>
				<button type="submit" class="btn btn-block btn-primary">Add</button>
			</form>
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
					company:{
						name: ''
					},
					displayForm: false
				}
			},
			mounted(){
				axios.get('api/companies')
				.then(res=>{
					console.log(res.data)
					this.companies = res.data 
				})
			},
			methods:{
				addCompany(){
					console.log(this.company.name)
				},
				showForm(){
					this.displayForm = !this.displayForm;
				}
			}

	}
</script>