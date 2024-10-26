const container = document.createElement('div');
container.style.textAlign = 'center';
container.style.fontFamily = 'Arial, sans-serif';
container.style.margin = '50px';

const header = document.createElement('h1');
header.textContent = 'Children learn all the time!';
header.style.fontFamily=' cursive;';
header.style.fontSize = '2em';
header.style.color = 'black';
container.appendChild(header);

const subheader = document.createElement('p');
subheader.textContent='Games, cartoons, books, and activities for play and development.';
subheader.style.fontSize = '1.2em';
subheader.style.color = '#777';
container.appendChild(subheader);

const featuresContainer = document.createElement('div');
featuresContainer.style.display = 'flex';
featuresContainer.style.justifyContent = 'space-around';
featuresContainer.style.marginTop = '30px';
container.appendChild(featuresContainer);


function createFeature(icon, title, description,img) {
    const feature = document.createElement('div');
    feature.style.textAlign = 'center';
    feature.style.width = '200px';

    const featureIcon1 = document.createElement('img');
    featureIcon1.src =icon;
    featureIcon1.style.width = '100px';
    feature.appendChild(featureIcon1);
    
    const featureTitle = document.createElement('h3');
    featureTitle.textContent = title;
    featureTitle.style.color = '#333';
    featureTitle.style.fontSize = '1.2em';
    feature.appendChild(featureTitle);

    const featureDescription = document.createElement('p');
    featureDescription.textContent = description;
    featureDescription.style.color = '#666';
    featureDescription.style.fontSize = '0.9em';
    feature.appendChild(featureDescription);

    return feature;
}

featuresContainer.appendChild(createFeature('https://us.playkids.com/_nuxt/img/wagon02.986af89.svg', 'Full Content for Kids', 'All in one Place for Safe Access.'));
featuresContainer.appendChild(createFeature('https://us.playkids.com/_nuxt/img/wagon03.e36dfe7.svg', 'Empowering Your Child for the World', 'Content that Encourages Empathy, Embraces Diversity, and Fosters Respect for Societal Growth.'));
featuresContainer.appendChild(createFeature('https://us.playkids.com/_nuxt/img/wagon04.6091ad7.svg', 'Exclusive games and cartoons', 'Enhance learning of numbers, languages, logic, and more.'));

const button = document.createElement('button');
button.textContent = 'Try Now';
button.style.backgroundColor = '#a217ab';
button.style.color = 'white';
button.style.border = 'none';
button.style.padding = '10px 50px';
button.style.fontSize = '3em';
button.style.cursor = 'pointer';
button.style.marginTop = '70px';
button.style.borderRadius = '1200px';

container.appendChild(button);

document.body.appendChild(container);