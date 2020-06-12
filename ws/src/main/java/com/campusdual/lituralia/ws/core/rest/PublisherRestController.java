package com.campusdual.lituralia.ws.core.rest;


import com.campusdual.lituralia.api.core.service.IPublisherService;


import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/publishers")
@ComponentScan(basePackageClasses = {com.campusdual.lituralia.api.core.service.IPublisherService.class})
public class PublisherRestController extends ORestController<IPublisherService> {

    @Autowired
    private IPublisherService publisherService;

    @Override
    public IPublisherService getService() {
        return this.publisherService;
    }
}
