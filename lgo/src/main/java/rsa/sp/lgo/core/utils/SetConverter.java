package rsa.sp.lgo.core.utils;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

@Converter
public class SetConverter implements AttributeConverter<Set<Long>, String> {
    private static final Logger log = LoggerFactory.getLogger(SetConverter.class);
    private ObjectMapper mapper = new ObjectMapper();

    public SetConverter() {
    }

    public String convertToDatabaseColumn(Set<Long> o) {
        if (o != null && o.size() != 0) {
            try {
                return this.mapper.writeValueAsString(o);
            } catch (JsonProcessingException var3) {
                log.error("Error when converting to database column", var3);
                return null;
            }
        } else {
            return null;
        }
    }

    public Set<Long> convertToEntityAttribute(String o) {
        Set<Long> res = new HashSet();
        if (!StringUtils.isEmpty(o)) {
            try {
                TypeReference<Set<Long>> typeRef = new TypeReference<Set<Long>>() {
                };
                res = (Set)this.mapper.readValue(o, typeRef);
            } catch (IOException var4) {
                log.error("Error when converting to entity attribute", var4);
            }
        }

        return (Set)res;
    }
}
