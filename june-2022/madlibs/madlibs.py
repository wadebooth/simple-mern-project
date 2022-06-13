#string concatenation (aka how to put strings together)
#suppose we want to create a string that says "Listen to ____"

artist = '' #some string variable

#a few ways to do this

print("Subscribe to " + artist)
print("Subscribe to {}".format(artist))
print(f"subscribe to {artist}")