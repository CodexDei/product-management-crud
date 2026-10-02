package com.codexdei.springboot.backend.backend_products;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.codexdei.springboot.backend.backend_products.entities.Product;

//Permite que se expongan los id. Ej: Al ejecutar el postman se muestra el id del producto, si esto no lo muestra
@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        config.exposeIdsFor(Product.class);
    }

}
