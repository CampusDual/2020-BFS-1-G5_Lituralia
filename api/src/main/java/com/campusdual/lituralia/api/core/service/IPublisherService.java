package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;

import java.util.List;
import java.util.Map;

public interface IPublisherService {

    EntityResult publisherQuery(Map<?, ?> keyMap, List<?> attrList);
    EntityResult publisherInsert(Map<?, ?> attrMap);
    EntityResult publisherUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult publisherDelete(Map<?, ?> keyMap);
}
