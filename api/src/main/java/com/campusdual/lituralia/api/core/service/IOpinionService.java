package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;

import java.util.List;
import java.util.Map;

public interface IOpinionService {

    EntityResult opinionQuery(Map<?, ?> keyMap, List<?> attrList);
    EntityResult opinionInsert(Map<?, ?> attrMap);
    EntityResult opinionUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult opinionDelete(Map<?, ?> keyMap);
}