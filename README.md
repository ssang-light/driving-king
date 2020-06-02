# 운전왕

## PR 방법

1. 원격 저장소 변경 확인

```
git fetch
```

2. 원격 저장소 `master` 변경 사항 가져오기

```
git pull
```

2-1. 원격 저장소의 다른 브랜치 가져오기

```
git checkout -t branch
```

3. `branch` 생성하고 `checkout` 하기

```
git checkout -b branch
```

4. 작업 후 변경사항 확인하기

```
git status
```

5. 스테이징 후 커밋하기

```
git add file
git commit -m "커밋 메시지"
```

6. 작업 완료하고 푸시하기

```
git push --set-upstream origin master
```

7. `Github` 에서 PR 작성

8. `Squash and merge` 하고 `branch delete` 하기

9. 작업 완료한 로컬 `branch` 삭제하기

10. 1부터 다시 반복하기
