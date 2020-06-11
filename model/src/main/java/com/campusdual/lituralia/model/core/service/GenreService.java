package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IGenreService;
import com.campusdual.lituralia.model.core.dao.GenreDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service("GenreService")
@Lazy
public class GenreService implements IGenreService {

    @Autowired
    private GenreDao genreDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult genreQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(genreDao, keyMap, attrList);
    }

    public EntityResult genreInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(genreDao, attrMap);
    }

    public EntityResult genreUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(genreDao, attrMap, keyMap);
    }

    public EntityResult genreDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.genreDao, keyMap);
    }
}
