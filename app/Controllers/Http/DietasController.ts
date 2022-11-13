// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Dieta from "App/Models/Dieta"

export default class DietasController {
        
    async index(){
        return  Dieta.all()
     }
 
     async store({request}){
         
         const dados = request.all()
         return Dieta.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Dieta.findBy('id', id)
         return show
     }
 
     async update({request}){
        
     const id = request.param("id")
     const dados = request.all()
     const updat = await Dieta.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){
          
     const id = request.param("id")
     const delet = await Dieta.findOrFail(id)
     delet.delete()
     return delet
 
     }

}