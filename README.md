# monroecountyvotes
Tool for quickly getting information about those people on your Ballot in Monroe County, NY

### MAGIC@RIT Election Night Hackathon

Pitched this idea at the 2016 Election Night Hackathon.  Grab the ballot based on web api end 
point from the county, then populate a page with information about all of the candates.

Here is the ballot look up link:

http://www.monroecounty.gov/etc/voter/

Here is the Street lookup end point:

http://www.monroecounty.gov/etc/voter/streetac.php?term={address} where {address} is the persons address.

Here is the URL that we need to POST:

http://www.monroecounty.gov/etc/voter/index.php

Here are the fields that you need to include:

    v[lname] - Name of person ( not required? )
    v[dobm]  - Date of Birth Month ( not required? )
    v[dobd]  - Date of Birth Date ( not required? )
    v[doby]  - Date of Birth Year ( not required? )
    v[no]    - House Numbre ( required )
    v[sname] - Street Name ( required )
    v[zip]   - Zipcode ( required )
    submit   - Always: "Get+Voter+Info"
    
This will return a HTML page, with this tag:

    <body>
        <div id="wrap">
            <div id="voter" class="registerd">
                <div>
                    <a href="ballots/5940.pdf" target="_blank">View Your Ballot</a>
                </div>
            </div>
        </div>
    </body>
    
The href is what we're looking for.  The href is `ballots/5940.pdf` in the above.  This means the full URL
is `http://www.monroecounty.gov/etc/voter/ballots/5940.pdf`.

We need to download this pdf, and then pull out the information.  We are interested in:

- List of possitions
- List of people running for each possition and what parties they are running on

From here, we'll then need to get information for each of these people.

Here is a list of all of the people on all of the ballots:

https://www2.monroecounty.gov/files/Candidates%20List%2020161004.pdf

The key will be to bring all of this information together.

Flow of process:

    1) Have the user put in their address
    2) Pull the ballot and figure out the possitions and people on the ballot.
    3) Look up those people against the known list of people running, and get all of the recorded information that has been collected for the candidates.
    4) Display all of the information in an easy to consume manor.


