# android 실행 시
> 루트 디렉터리에서
>> npx react-native run-android

# gradle 정리 시
> android 디렉터리에서
>> ./gradlew clean

# node_modules 제거 후 다시 생성할 경우
> 루트 디렉터리에서
>> 1. rm -rf node_modules
>> 2. npm install

# 현재 진행 버전
> android/build.gradle
>> com.android.tools.build:gradle:8.1.1
>
>> kotlinVersion = "1.9.22"

> package.json
>> "react-native": "0.74.3"

> android/gradle/wrapper/gradle-wrapper.properties
>> distributionUrl=https\://services.gradle.org/distributions/gradle-8.3-all.zip

# react-native는 java 11버전과 찰떡 호환이라고 함
> 따라서 다른 버전의 java를 사용하고 싶을 경우
1. android/build.gradle에 아래 코드 추가
```
subprojects { 
   afterEvaluate { project ->
      if (project.hasProperty("android")) {
         android {
            compileOptions {
               sourceCompatibility JavaVersion.VERSION_17
               targetCompatibility JavaVersion.VERSION_17
            }
         }
      }
   }
}
```

2. android/app/build.gradle의 android 항목 아래 코드 추가
```
compileOptions {
     sourceCompatibility JavaVersion.VERSION_17
     targetCompatibility JavaVersion.VERSION_17
 }

 kotlinOptions {
     jvmTarget = '17'
 }
```
