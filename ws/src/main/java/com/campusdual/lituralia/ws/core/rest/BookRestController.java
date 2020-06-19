package com.campusdual.lituralia.ws.core.rest;

import com.campusdual.lituralia.api.core.service.IBookService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/books")
@ComponentScan(basePackageClasses = { com.campusdual.lituralia.api.core.service.IBookService.class })
public class BookRestController extends ORestController<IBookService> {

    @Autowired
    private IBookService bookService;

    @Override
    public IBookService getService() {
        return this.bookService;
    }
}