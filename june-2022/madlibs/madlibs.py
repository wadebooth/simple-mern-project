#string concatenation (aka how to put strings together)
#suppose we want to create a string that says "Listen to ____"

# artist = 'Smino' #some string variable

# #a few ways to do this

# print("Subscribe to " + artist)
# print("Subscribe to {}".format(artist))
# print(f"subscribe to {artist}")

adj = input("Adjective: ")
verb1 = input("Verb: ")
verb2 = input("Verb: ")
famous_person = input("Famous person:")

madlib = f'Computer programming is so {adj}! It makes me so excited because I love to {verb1}. Stay hydrated and {verb2} like you are {famous_person}.'

print(madlib)