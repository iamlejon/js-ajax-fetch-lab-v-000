function getIssues() {
  let url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues` 
    fetch(url, {
      method: 'GET',
      headers: {
        Authoirzation: `token ${token}`
      }
    }).then(resp => resp.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(resp => showForcedRepo(repo))
}

function showForkedRepo(repo){
   repoName = repo.split('/')[1]
   const repoURL  = `<a href="https://github.com/smithwebtek/${repoName}">repo URL</a>`
   $('#results').html(repoURL)
  }

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
