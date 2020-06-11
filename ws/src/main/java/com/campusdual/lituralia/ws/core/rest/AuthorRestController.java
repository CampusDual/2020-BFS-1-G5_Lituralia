package com.campusdual.lituralia.ws.core.rest;

import com.campusdual.lituralia.api.core.service.IAuthorService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authors")
@ComponentScan(basePackageClasses = {com.campusdual.lituralia.api.core.service.IAuthorService.class})
public class AuthorRestController extends ORestController<IAuthorService>{

    @Autowired
    private IAuthorService authorService;

    @Override
    public IAuthorService getService() {
        return this.authorService;
    }


}
