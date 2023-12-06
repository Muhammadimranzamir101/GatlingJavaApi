package videogamedb.scriptFundamentals;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class videGameDbScript extends Simulation {

    //1. Http Configuration
    HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json");

    //2. Scenario Definition

    ScenarioBuilder scb = scenario("Game DB Apis")
            .exec(http("Get all games")
                    .get("/videogame"));

    //3. Load Simulation

    {
        setUp(
                scb.injectOpen(atOnceUsers(29))
        ).protocols(httpProtocol);
    }

}