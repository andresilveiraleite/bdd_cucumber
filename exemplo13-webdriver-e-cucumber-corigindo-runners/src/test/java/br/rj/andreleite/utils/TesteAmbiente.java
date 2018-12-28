package br.rj.andreleite.utils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbiente {
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:\\drivers_browsers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");
	}
}
