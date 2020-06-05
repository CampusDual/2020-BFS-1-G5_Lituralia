package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IBookService;
import com.campusdual.lituralia.model.core.dao.BookDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service("BookService")
@Lazy
public class BookService implements IBookService {

    @Autowired
    private BookDao bookDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult bookQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(bookDao, keyMap, attrList);
    }

    public EntityResult bookInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(bookDao, attrMap);
    }

    public EntityResult bookUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(bookDao, attrMap, keyMap);
    }

    public EntityResult bookDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.bookDao, keyMap);
    }
}
