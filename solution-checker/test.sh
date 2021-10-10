#!/bin/sh

b=1
a=0
while [ "$a" -lt 100 ]
do
  python CreateDB.py $b

  python TestRunnerDaemon.py

  python CreateDB.py $b

  python TestRunnerDaemonOne.py
  a=`expr $a + 1`
done
