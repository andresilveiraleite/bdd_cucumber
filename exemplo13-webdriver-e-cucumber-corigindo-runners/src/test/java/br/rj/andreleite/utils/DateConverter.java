package br.rj.andreleite.utils;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import cucumber.api.Transformer;

// Utilizando o Transforme do JAVA.
public class DateConverter extends Transformer<Date> {

	@Override
	public Date transform(String arg0) {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		try {
			Date retorno = format.parse(arg0);
			return retorno;
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
	}

}
