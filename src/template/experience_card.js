export function createCard(title, content) {
    const template = `
    <div class="bg-white rounded-2xl shadow-md p-5 m-2 box-border exp-card h-25 overflow-hidden">
      <h3>System Developer</h3>
      <p>Wing Bank</p>
      <p class="text-gray-500">Oct 2021 - Present</p>
      <ul class="list-disc pl-10">
        <li></li>
        <li>Designed and built scalable backend systems based on business needs and best practices.</li>
        <li>Designed and built scalable backend systems based on business needs and best practices.</li>
      </ul>
    </div>
  `;

    // Convert string to DOM element
    const temp = document.createElement('div');
    temp.innerHTML = template.trim();
    return temp.firstChild; // return the first element
}
