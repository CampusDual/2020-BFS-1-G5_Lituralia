package com.campusdual.lituralia.ws.core.rest;

import com.campusdual.lituralia.api.core.service.IOpinionService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/opinions")
@ComponentScan(basePackageClasses = {IOpinionService.class})
public class OpinionRestController extends ORestController<IOpinionService> {

    @Autowired
    private IOpinionService opinionService;

    @Override
    public IOpinionService getService() {
        return this.opinionService;
    }
}
