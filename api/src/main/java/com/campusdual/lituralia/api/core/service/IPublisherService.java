package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface IPublisherService {

    EntityResult publisherQuery(Map<?, ?> keyMap, List<?> attrList);
    EntityResult publisherInsert(Map<?, ?> attrMap);
    EntityResult publisherUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult publisherDelete(Map<?, ?> keyMap);


    // ---- PUBLISHER RATINGS VIEW ----


    EntityResult vPublisherRatingsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult vPublisherRatingsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult vPublisherRatingsDelete(Map<?, ?> keyMap);
}
