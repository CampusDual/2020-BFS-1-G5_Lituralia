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

    EntityResult vAuthorRatingsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    EntityResult vAuthorRatingsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult vAuthorRatingsDelete(Map<?, ?> keyMap);

    EntityResult authorBookQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException;

    EntityResult authorBookInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;

    EntityResult authorBookUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues)
        throws OntimizeJEERuntimeException;

    EntityResult authorBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    EntityResult vAuthorBookQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException;

    EntityResult vAuthorBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    EntityResult vAuthorBookDetailsQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException;

    EntityResult vAuthorBookDetailsDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;
}
