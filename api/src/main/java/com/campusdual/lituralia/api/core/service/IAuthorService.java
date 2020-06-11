package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;

import java.util.List;
import java.util.Map;

public interface IAuthorService {

    EntityResult authorQuery(Map<?, ?> keyMap, List<?> attrList);

    EntityResult authorInsert(Map<?, ?> attrMap);

    EntityResult authorUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult authorDelete(Map<?, ?> keyMap);
}
