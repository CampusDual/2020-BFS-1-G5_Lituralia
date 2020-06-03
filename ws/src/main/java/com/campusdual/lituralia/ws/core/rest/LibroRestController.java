package com.campusdual.lituralia.ws.core.rest;

import com.campusdual.lituralia.api.core.service.ILibroService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/libros")
@ComponentScan(basePackageClasses = {com.campusdual.lituralia.api.core.service.ILibroService.class})
public class LibroRestController extends ORestController<ILibroService> {

    @Autowired
    private ILibroService libroService;

    @Override
    public ILibroService getService() {
        return this.libroService;
    }
}
