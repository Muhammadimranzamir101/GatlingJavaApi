package videogamedb;

import java.time.Duration;
import java.util.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import io.gatling.javaapi.jdbc.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.jdbc.JdbcDsl.*;

public class RecordedSimulationProxy extends Simulation {

  private HttpProtocolBuilder httpProtocol = http
    .baseUrl("https://videogamedb.uk")
    .inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*\\.svg", ".*detectportal\\.firefox\\.com.*"))
    .acceptHeader("*/*")
    .acceptEncodingHeader("gzip, deflate, br")
    .userAgentHeader("PostmanRuntime/7.32.3");
  
  private Map<CharSequence, String> headers_0 = Map.ofEntries(
    Map.entry("Cache-Control", "no-cache"),
    Map.entry("Postman-Token", "4fd2b3fd-f9bb-415a-824f-6e9c07174248")
  );
  
  private Map<CharSequence, String> headers_1 = Map.ofEntries(
    Map.entry("Cache-Control", "no-cache"),
    Map.entry("Content-Type", "application/json"),
    Map.entry("Postman-Token", "74fb845a-f981-4650-9f8d-d972ba18239c")
  );
  
  private Map<CharSequence, String> headers_2 = Map.ofEntries(
    Map.entry("Cache-Control", "no-cache"),
    Map.entry("Postman-Token", "50b6d87b-fee7-41da-99b2-b898769d926d")
  );
  
  private Map<CharSequence, String> headers_3 = Map.ofEntries(
    Map.entry("Cache-Control", "no-cache"),
    Map.entry("Content-Type", "application/json"),
    Map.entry("Postman-Token", "3013a12f-0f4e-4ee7-a4a1-1b9bb3e40383"),
    Map.entry("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMTc2Nzc4NSwiZXhwIjoxNzAxNzcxMzg1fQ.JaHT0yGXktoAKGZCCWR5c87Pc8LlP_OA95EgbOf7OFQ")
  );
  
  private Map<CharSequence, String> headers_4 = Map.ofEntries(
    Map.entry("Cache-Control", "no-cache"),
    Map.entry("Content-Type", "application/json"),
    Map.entry("Postman-Token", "9ccca3de-18e1-464b-852e-f8f8302b7b01"),
    Map.entry("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMTc2Nzc4NSwiZXhwIjoxNzAxNzcxMzg1fQ.JaHT0yGXktoAKGZCCWR5c87Pc8LlP_OA95EgbOf7OFQ")
  );
  
  private Map<CharSequence, String> headers_5 = Map.ofEntries(
    Map.entry("Cache-Control", "no-cache"),
    Map.entry("Postman-Token", "4b305c2b-2d50-4872-9ae9-78d42006b89d"),
    Map.entry("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMTc2Nzc4NSwiZXhwIjoxNzAxNzcxMzg1fQ.JaHT0yGXktoAKGZCCWR5c87Pc8LlP_OA95EgbOf7OFQ")
  );


  private ScenarioBuilder scn = scenario("RecordedSimulationProxy")
    .exec(
      http("request_0")
        .get("/api/videogame")
        .headers(headers_0)
    )
    .pause(8)
    .exec(
      http("request_1")
        .post("/api/authenticate")
        .headers(headers_1)
        .body(RawFileBody("videogamedb/recordedsimulationproxy/0001_request.json"))
    )
    .pause(10)
    .exec(
      http("request_2")
        .get("/api/videogame/2")
        .headers(headers_2)
    )
    .pause(7)
    .exec(
      http("request_3")
        .post("/api/videogame")
        .headers(headers_3)
        .body(RawFileBody("videogamedb/recordedsimulationproxy/0003_request.json"))
    )
    .pause(6)
    .exec(
      http("request_4")
        .put("/api/videogame/3")
        .headers(headers_4)
        .body(RawFileBody("videogamedb/recordedsimulationproxy/0004_request.json"))
    )
    .pause(3)
    .exec(
      http("request_5")
        .delete("/api/videogame/2")
        .headers(headers_5)
    );

  {
	  setUp(scn.injectOpen(atOnceUsers(1))).protocols(httpProtocol);
  }
}
