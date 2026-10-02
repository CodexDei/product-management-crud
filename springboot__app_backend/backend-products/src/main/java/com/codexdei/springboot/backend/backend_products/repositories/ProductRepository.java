package com.codexdei.springboot.backend.backend_products.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.codexdei.springboot.backend.backend_products.entities.Product;

//evita bloqueo de CORS, es necesario para la comunicacion con el fronted
@CrossOrigin(origins = "http://localhost:5173/")
// permite hacer todo tipo de operaciones crud sin crear controladores, solo con
// la url
// en el path se debe colocar el nombre de la entidad en minuscula MAS UNA LETRA
// S
@RepositoryRestResource(path = "products")
public interface ProductRepository extends CrudRepository<Product, Long> {

}
