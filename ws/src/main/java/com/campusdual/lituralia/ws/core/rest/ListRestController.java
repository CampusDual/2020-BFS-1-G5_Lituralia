package com.campusdual.lituralia.ws.core.rest;

import com.campusdual.lituralia.api.core.service.IListService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lists")
@ComponentScan(basePackageClasses = { IListService.class })
public class ListRestController extends ORestController<IListService> {

    @Autowired
    private IListService listService;

    @Override
    public IListService getService() {
        return this.listService;
    }
}