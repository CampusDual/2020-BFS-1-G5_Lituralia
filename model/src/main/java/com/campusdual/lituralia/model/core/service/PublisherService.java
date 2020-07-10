package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IPublisherService;
import com.campusdual.lituralia.model.core.dao.PublisherDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service("PublisherService")
@Lazy
public class PublisherService implements IPublisherService {

    @Autowired
    private PublisherDao publisherDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;


    @Override
    public EntityResult publisherQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(publisherDao, keyMap, attrList);
    }

    @Override
    public EntityResult publisherInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(publisherDao, attrMap);
    }

    @Override
    public EntityResult publisherUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(publisherDao, attrMap, keyMap);
    }

    @Override
    public EntityResult publisherDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.publisherDao, keyMap);
    }


    // ---- PUBLISHER RATINGS VIEW ----


    @Override
    public EntityResult vPublisherRatingsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.publisherDao, keysValues, attributes, PublisherDao.QUERY_VPUBLISHERRATINGS);
    }

    @Override
    public EntityResult vPublisherRatingsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(publisherDao, attrMap, keyMap);
    }

    @Override
    public EntityResult vPublisherRatingsDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.publisherDao, keyMap);
    }

}
