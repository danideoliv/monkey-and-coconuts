#include <stdio.h>

int main(void)
{
	int n, m, d = 0, c = 0, y = 1;

	printf("Digite o numero de cocos: ");
	scanf("%d", &n);
	
	m = n; 
	
	for (int i = 1; i <= n; i++)
	{
		if ((n - 1) % i == 0)
		{
			d += 1;
		}
	}

	int divisors[d];

	for (int i = 1; i <= n; i++)
	{
		if ((n - 1) % i == 0)
		{
			divisors[c] = i;
			c++;
		}
	}

	for (int x = d - 1; x >= 0; x--)
	{
		for (int i = 0; i < divisors[x]; i++)
		{
			if ((m - 1) % divisors[x] == 0)
			{
				m = m - 1 - m / divisors[x];
			}
			else
			{
				break;
			}
			
			y++;
		}
		
		if (m % divisors[x] == 0 && y == divisors[x] && divisors[x] != 1)
		{
			printf("%i cocos, %i pessoas e 1 macaco\n", n, divisors[x]);
			return 0;
		}
		
		m = n;		
		y = 0;
	}
	
	printf("%i cocos, sem solucao", n);
}