package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface IOpinionService {

    EntityResult opinionQuery(Map<?, ?> keyMap, List<?> attrList);
    EntityResult opinionInsert(Map<?, ?> attrMap);
    EntityResult opinionUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult opinionDelete(Map<?, ?> keyMap);

    EntityResult vAuthorOpinionsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    EntityResult vPublisherOpinionsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    EntityResult vBookOpinionsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
}