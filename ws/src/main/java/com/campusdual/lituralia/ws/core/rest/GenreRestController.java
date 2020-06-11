package com.campusdual.lituralia.ws.core.rest;

import com.campusdual.lituralia.api.core.service.IGenreService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/genres")
@ComponentScan(basePackageClasses = { IGenreService.class })
public class GenreRestController extends ORestController<IGenreService> {

    @Autowired
    private IGenreService genreService;

    @Override
    public IGenreService getService() {
        return this.genreService;
    }
}