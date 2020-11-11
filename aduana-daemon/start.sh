#!/bin/bash
BASE_DIR=/scripts/aduana-daemon
JSVC_BIN=/usr/bin/jsvc
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-arm64
PID_FILE=/scripts/aduana-daemon/pid/jsvc.pid

$JSVC_BIN -debug -home $JAVA_HOME -cp "$BASE_DIR/*" -pidfile $PID_FILE -outfile "$BASE_DIR/log/out.log" -errfile '&aduana-daemon' com.backend.aduana.DaemonRun
