package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface IAuthorService {

    EntityResult authorQuery(Map<?, ?> keyMap, List<?> attrList);

    EntityResult authorInsert(Map<?, ?> attrMap);

    EntityResult authorUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult authorDelete(Map<?, ?> keyMap);

    // ---- AUTHOR DETAILS VIEW ----

    EntityResult vAuthorDetailsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    EntityResult vAuthorDetailsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult vAuthorDetailsDelete(Map<?, ?> keyMap);
}
