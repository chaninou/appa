#!/usr/bin/env python
import aiml
k = aiml.Kernel()
k.learn("learningFileList.aiml")
k.respond("LEARN AIML")
while True:
    reply = k.respond(input("User > "))
    if reply:
        print("bot > ", reply)
    else:
        print("bot > :) ", )
