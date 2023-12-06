package videogamedb.scriptFundamentals;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.Simulation;

import java.time.Duration;

public class videoGameDb extends Simulation {

    HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json");

    ScenarioBuilder scb = scenario("Video Game DB")
            .exec(http("Get All video games -- Part 1")
                    .get("/videogame"))
            .pause(5)

            .exec(http("Get Specific Game")
                    .get("/videogame/2"))
            .pause(1,10)

            .exec(http("Get all video games -- 2")
                    .get("/videogame"))
            .pause(Duration.ofMillis(3000));

    {
        setUp(scb.injectOpen(atOnceUsers(2))
                .protocols(httpProtocol));
    }

}
